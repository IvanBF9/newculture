const graphql = require("graphql");
const jwt_decode = require('jwt-decode');
const jsdom = require("jsdom");
const {randomStr} = require("../../functions");
const sharp = require('sharp');

const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = graphql;

//Sequelize models
const {Article} = require('../../models');
const {CategorieArticle} = require('../../models');
//model for graphql
const {ArticleType} = require("../Types/ArticleType");
/*
Publics functions
- this functions can be accessed by public root
*/

// Get one article;
const getArticle = {
    type: new GraphQLList(ArticleType),
    args: {
        id_article : { type : GraphQLInt },
    },
    async resolve(parent, args) {
        const {id_article} = args;
        console.log('aleeerrrrt', args)
        try{
            if (!id_article) throw new Error('Id of article is missing');
            let article = await Article.findByPk(id_article);
            if (!article) throw new Error('Article not found !');
            // test low sah
            //let custom = article.content.content;

            //Original V


          /*  const dom = new jsdom.JSDOM(custom);
            console.log(dom);


    /*        [...dom.window.document.querySelectorAll('img')].map((elem, index) => {
                //if (index !== 0) elem.remove();
            });*/

           // const toString = dom.serialize();
            //article.content = JSON.stringify(article.content);
            //console.log(toString);

            //--------------

            article.content = JSON.stringify(article.content.contentl);
            return [article];

        }catch(e){
            console.log(e);
        }
    }
}

const getArticles = {
    type: new GraphQLList(ArticleType),
    args: {
        categorie_name: { type: GraphQLString },
    },
    async resolve(parent, args) {
        const cateName = args.categorie_name;
        try{
            //If no categorie is defined return all
            if (cateName == "" || cateName == undefined){
                let articles = await Article.findAll({ limit: 10, order: [['updatedAt', 'DESC']]});

                let promise1 = articles.map(async (article) => {

                    //Original V
                    if (article.content.contentm){
                        article.content.content = article.content.contentm;
                        article.content = JSON.stringify(article.content);
                    }else{

                        let custom = article.content.content;

                        const dom = new jsdom.JSDOM(custom);
                        console.log(dom);

                        [...dom.window.document.querySelectorAll('img')].map(async(e) => {
                            e.remove();
                            const buff = Buffer.from(e.src.substring(e.src.indexOf(',') + 1),'base64');
                            // METADATA
                            const imageData = await sharp(buff).metadata();
                        });


                        article.content = JSON.stringify(article.content);
                    }
                })

                await Promise.all(promise1);

                return articles;
            }
            //get categorie id
            const cate = await CategorieArticle.findOne({where: {name: cateName}});
            const {id} = cate.dataValues;
            //return articles for this categorie
            let articles = await Article.findAll({ limit: 10, order: [['updatedAt', 'DESC']], where: {categorie_id : id}});

            articles.map(article => {
                article.content = JSON.stringify(article.content);
            })

            return articles;
        }catch(e){
            console.log(e);
        }
    }
}
/*
Admin functions
*/
//Articles

const getMyArticles = {
    type: new GraphQLList(ArticleType),
    async resolve(parent, args) {

        try{
            
            let {id} = jwt_decode(parent);
            console.log('sah', id);
            let articles = await Article.findAll({ limit: 10, order: [['updatedAt', 'DESC']], where: {user_id: id}});
            articles.map(article => {
                article.content = JSON.stringify(article.content);
            })
            console.log(articles)
            return articles;

        }catch(e){
            console.log(e);
        }
    },
}


const deleteArticleByUser = {
    args: {
        id: { type: GraphQLInt },
    },
    type: new GraphQLList(ArticleType),
    async resolve(parent, args) {

        try{
            
            let {id} = jwt_decode(parent);
            let article = await Article.findOne({ where: {id: args.id}});

            if (article.user_id == id){
                return Article.destroy({ where: {id : args.id} });
            }else{
                throw new Error('err')
            }

        }catch(e){
            console.log(e);
        }
    },
}

const createArticle = {
    type: ArticleType,
    args: {
        title: { type: GraphQLString},
        description: { type: GraphQLString},
        content: { type: GraphQLString},
        categorie_id: { type: GraphQLInt},
    },
    async resolve(parent, args) {
        try{
            /*

            git info !! a exploiter pour le format des images !
            const percentage = 25;
            sharp(input).metadata()
            .then(info => {
                const width = Math.round(info.width * percentage / 100);
                const height = Math.round(info.height * percentage / 100);
                return sharp(input).resize(width, height).toBuffer();
            })
            .then(output => {
                ...
            });
            
            */

            let {id} = jwt_decode(parent);
            let content = args.content;

            // Function to resize images return Blob Base64
            async function resizeImages(source, size){
                let buff = Buffer.from(source.substring(source.indexOf(',') + 1),'base64');
                let resized = await sharp(buff).resize(size).rotate().webp({ lossless: false }).toBuffer();
                return `data:image/webp;base64,${resized.toString('base64')}`;
            }

            // Make 3 contents 
            const keys = ['content', 'contentm', 'contentl']
            const sizes = [400, 800, 1600];

            // contents Container
            let contentCt = {};

            let contentPromise = sizes.map(async (size, index) => {
                const key = keys[index];
                const actualDom = new jsdom.JSDOM(content);

                let imagesPromise = [...actualDom.window.document.querySelectorAll('img')].map(async (img) => {
                    const url = await resizeImages(img.src, size);
                    img.src = url;
                });
                // Wait for images
                await Promise.all(imagesPromise);
                contentCt[key] = actualDom.serialize();
            });

            await Promise.all(contentPromise);

/*
            // We need to clean content !
            const html = new jsdom.JSDOM(content);
            // Init images object !
            let images = {
                imgs : [],
                imgm: [],
                imgl: []
            };

            // Loop into all images !
            let promise = [...html.window.document.querySelectorAll('img')].map(async (img) => {
                const imageId = randomStr(63);
                // Vars for resizing !
                const sizesKey = ['imgs', 'imgm', 'imgl'];
                const sizes = [400, 800, 1600];

                for (let i = 0; i < sizes.length; i++) {
                    // Values
                    const key  = sizesKey[i];
                    const px = sizes[i];

                    // Push resized images
                    images[key].push({
                        src: await resizeImages(img.src, px),
                        id : imageId
                    })
                }
                // Set source to null !
                img.src = '';
                img.id = imageId;
            });

            await Promise.all(promise);

            content: {
                    content : content,
                    imgs : images.imgs,
                    imgm : images.imgm,
                    imgl : images.imgl
                },
            */

            let article = {
                title: args.title,
                description: args.description,
                content: contentCt,
                categorie_id: args.categorie_id,
                valide: true,//Temporaire Validation a faire par un admin !
                user_id: id,
            }
            let newArticle = new Article(article);
            newArticle.save();
        }catch(err){
            console.log(`Article could not be created error : ${err}`);

        }
    }
}

//Events

//You can create a func like logout where you remove user token from db to revoke it 

module.exports = {
    getArticles,
    createArticle,
    getArticle,
    getMyArticles,
    deleteArticleByUser
};
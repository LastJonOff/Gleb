module.exports = {
    port: 8081,
    dbURL: "mongodb+srv://admin:12341234@cluster0-kvmin.azure.mongodb.net/<dbname>?retryWrites=true&w=majority",
    dbOptions: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
}
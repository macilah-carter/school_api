//paginate func

function paginate(model) {
    return async(req, res, next) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const start = (page - 1)* limit;
        const end = page * limit;

        const results = {}
        try {
            const totalDocs = await model.countDocuments().exec();

            if(end < totalDocs){
                results.nextPage = {
                    page: page + 1,
                    limit: limit
                }
            }

            if(start > 0){
                results.prevPage = {
                    page: page - 1,
                    limit: limit
                }
            }
            results.results = await model.find().populate('units').limit(limit).skip(start).exec()
            res.paginate = results
            next()
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = paginate;
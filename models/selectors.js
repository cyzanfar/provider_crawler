const { Provider, Instructor } = require('./provider');

class ProviderSelector {
    model = Provider;
    relation = Instructor;

    async getProviders(filters) {
        return await this.model.findAll({
            include: [{
                model: this.relation,
                as: 'instruct',
                where: filters
            }],
        });
    }
}

module.exports = (() => {
    return new ProviderSelector()
})()

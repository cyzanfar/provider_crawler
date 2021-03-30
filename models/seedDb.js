const { PROVIDERS } = require('../data/providers');
const { Provider, Instructor } = require('./provider');

(async function runPSave() {
    for (const p in PROVIDERS) {
        try {
            const provider = await Provider.create(
                {name: p, url: PROVIDERS[p]['url']},);

            const instruct = await Instructor.create(
                {
                    has_default_recaptcha: PROVIDERS[p]['instruction']['has_default_recaptcha'],
                    multistep: PROVIDERS[p]['instruction']['multistep'],
                    presence_selector: PROVIDERS[p]['instruction']['presence_selector'],
                    failing_criteria: PROVIDERS[p]['instruction']['failing_criteria'],
                    submission: PROVIDERS[p]['instruction']['submission'],
                    fields: PROVIDERS[p]['instruction']['fields'],
                    steps: PROVIDERS[p]['instruction']['steps'],
                    providerId: provider.id
                },
            )

            console.log(provider instanceof Provider);
            console.log(provider.name);
        } catch (e) {
            console.log(e)

        }
    }
})()
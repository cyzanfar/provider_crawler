const { PROVIDERS } = require('../data/providers');
const { Provider, Instructor } = require('./provider');

(async function runPSave() {
    for (const p in PROVIDERS) {
        try {
            const provider = await Provider.create(
                {name: p, url: PROVIDERS[p]['url']},);

            const instruct = await Instructor.create(
                {
                    defaultCaptcha: PROVIDERS[p]['instruction']['has_default_recaptcha'],
                    multistep: PROVIDERS[p]['instruction']['multistep'],
                    presenceSelector: PROVIDERS[p]['instruction']['presence_selector'],
                    failingCriteria: PROVIDERS[p]['instruction']['failing_criteria'],
                    submission: PROVIDERS[p]['instruction']['submission'],
                    fields: PROVIDERS[p]['instruction']['fields'],
                    steps: PROVIDERS[p]['instruction']['steps'],
                    providerId: provider.id
                },
            )

            console.log(instruct.presenceSelector)
            console.log(provider instanceof Provider);
            console.log(provider.name);
        } catch (e) {
            console.log(e)

        }
    }
})()
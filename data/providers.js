const {
    TIAA, FIDELITY,
    EMPOWER, VANGUARD,
    VOYA, PRINCIPAL,
    WELLS_FARGO, BOA,
    PRUDENTIAL, ROWE_PRICE,
    SCHWAB, MASSMUTUAL,
    NATIONWIDE, AMERICANFUNDS,
    ONEAMERICA, AXA,
    METLIFE, CUNA, MUTUALAMERICA,
    JPMORGAN, CONRAD, JULY,
    SECURITY_FINANCIAL, SLAVIC,
    JOHN_HANCOCK, EPIC, USI, TRANSAMERICA
} = require('./instructions');

const PROVIDERS = {
    'Fidelity Investments': {
        'name': 'Fidelity Investments',
        'url': 'https://login.fidelity.com/ftgw/Fas/Fidelity/NBPart/IdentifyUser/Init/',
        'instruction': FIDELITY
    },
    'TIAA': {
        'name': 'TIAA',
        'url': 'https://auth.tiaa.org/public/authentication/enroll#/email',
        'instruction': TIAA
    }, //has recaptcha
    'Empower Retirement': {
        'name': 'Empower Retirement',
        'url': 'https://participant.empower-retirement.com/participant/#/register/',
        'instruction': EMPOWER
    }, // has max attempt 3
    'The Vanguard Group, Inc.': {
        'name': 'The Vamguard Group Inc.',
        'url': 'https://personal.vanguard.com/us/JSP/RegLogOn/Regis/RegActivityContent.jsf',
        'instruction': VANGUARD
    },
    'Voya Financial': {
        'name': 'Voya Financial',
        'url': 'https://my.voya.com/voyassoui/index.html?domain=voyaretirement.voya.com#/registration',
        'instruction': VOYA,
    },
    'Principal Financial Group': {
        'name': 'Principal Financial Group',
        'url': 'https://secure05.principal.com/enterprise/registration/',
        'instruction': PRINCIPAL,

    },
    'Wells Fargo': {
        'name': 'Wells Fargo',
        'url': 'https://oam.wellsfargo.com/oamo/identity/enrollment',
        'instruction': WELLS_FARGO,
    },
    'Bank of America': {
        'name': 'Bank of America',
        'url': 'https://www.benefits.ml.com/Login/User/Verification',
        'instruction': BOA,
    },
    'Prudential Retirement': {
        'name': 'Prudential Retirement',
        'url': 'https://www.prudential.com/iam/registration/lookup/ret',
        'instruction': PRUDENTIAL,
    },
    'T. Rowe Price': {
        'name': 'T. Rowe Price',
        'url': 'https://www.troweprice.com/usis/login/enablement',
        'instruction': ROWE_PRICE,
    },
    'Charles Schwab': {
        'name': 'Charles Schwab',
        'url': 'https://www.schwabplan.com/Net2/Stateless/Registration/RegistrationStep1.aspx',
        'instruction': SCHWAB,
    },
    'MassMutual': {
        'name': 'MassMutual',
        'url': 'https://myaccount.massmutual.com/register-online',
        'instruction': MASSMUTUAL, // advance recaptcha
    },
    'Nationwide': {
        'name': 'Nationwide',
        'url': 'https://customer-login.nationwide.com/registration/search/account-type',
        'instruction': NATIONWIDE,
    },
    'American Funds': {
        'name': 'American Funds',
        'url': 'https://americanfunds.retirementpartner.com/participant/#/register/',
        'instruction': AMERICANFUNDS
    },
    'OneAmerica': {
        'name': 'OneAmerica',
        'url': 'https://www.employeebenefits.aul.com/registration/producerIdentity.faces',
        'instruction': ONEAMERICA,
    }, // not sure this is the one
    'AXA Equitable': {
        'name': 'AXA Equitable',
        'url': 'https://auth.equitable.com/reg/client/',
        'instruction': AXA,
    },
    // 'Paychex, Inc.': {
    //     'name': 'Paychex, Inc.',
    //     'url': 'https://myapps.paychex.com/landing_remote/login.do',
    //     'instruction': PAYCHEX
    // },
    'MetLife Resources': {
        'name': 'MetLife Resources',
        'url': 'https://metlife.retirementpartner.com/participant/#/register/',
        'instruction': METLIFE
    },
    'CUNA Mutual Retirement Solutions': {
        'name': 'CUNA Mutual Retirement Solutions',
        'url': 'https://www.benefitsforyou.com/Register',
        'instruction': CUNA
    },
    'Mutual of America': {
        'name': 'Mutual of America',
        'url': 'https://myaccount.mutualofamerica.com/Identity/UserIdentity/Signup',
        'instruction': MUTUALAMERICA
    },
    'J.P. Morgan Asset Management': {
        'name': 'J.P. Morgan Asset Management',
        'url': 'https://retirementlink.jpmorgan.com/participant/#/register/',
        'instruction': JPMORGAN
    }, // uses same template as other providers
    'Conrad Siegel': {
        'name': 'Conrad Siegel',
        'url': 'https://www.myconradsiegel.com/DontHaveAccess.aspx?t=1',
        'instruction': CONRAD
    },
    'July Business Services': {
        'name': 'July Business Services',
        'url': 'https://401k.julyservices.com/newwebuser.aspx',
        'instruction': JULY
    },
    'Security Financial Resources': {
        'name': 'Security Financial Resources',
        'url': 'https://www.securitybenefit.com/register/individuals',
        'instruction': SECURITY_FINANCIAL
    },
    'Slavic': {
        'name': 'Slavic',
        'url': 'https://www.slavic401k.com/account/create',
        'instruction': SLAVIC
    }, // last 5 of ssn
    'John Hancock': {
        'name': 'John Hancock',
        'url': 'https://myplan.johnhancock.com/registration',
        'instruction': JOHN_HANCOCK
    },
    'EPIC Retirement Plan Services': {
        'name': 'EPIC Retirement Plan Services',
        'url': 'https://www.go-retire.com/',
        'instruction': EPIC
    },
    'USI Consulting Group': {
        'name': 'USI Consulting Group',
        'url': 'https://usi.retirement.schwabrt.com/participant/',
        'instruction': USI
    },
    'Transamerica Retirement Solutions LLC': {
        'name': 'Transamerica Retirement Solutions LLC',
        'url': 'https://secure2.transamerica.com/registration/your-information',
        'instruction': TRANSAMERICA
    },
}
//     'BlueStar Retirement Services, Inc.': 'https://www.myplanconnection.com/Registration', //plan password
//     'Alerus Financial': 'https://login.alerus.com/signup', // hire MM/YYYY, dropdown select
//     'Morgan Stanley': 'https://netsecure.adp.com/pages/sms/ess/v3/pub/ssr/theme.jsp?returnUrl=https%3A%2F%2Fwww.mykplan.adp.com%2F&callingAppId=401K', // dropdown select
//     'The Hartford': 'https://account.thehartford.com/customer/#/registration?appid=EE', // asks for email first, CAN DO
//     'New York Life Investment Management': 'https://secureaccountview.com/BFWeb/clients/mainstayfunds/index?execution=e1s1&_eventId=userMaint&processType=ProcessType.EST_USERID', // ask for account number
//     'RPG Consultants': 'https://www.yourplanaccess.net/rpg/enrollinplan.aspx', // needs plan password
//     'Ameritas': 'https://accounts.ameritas.com/register', // AMBIGUOUS error message, asks for policy number
//     'Sentinel Benefits & Financial Group': 'https://qtweb.sentinelbenefits.com/enrollinplan.aspx', // asks for plan number
//     'BPAS': 'https://retirementservices.bpas.com/servlet/ParticipantLoginServlet?PL=participant&TargetPage=DefaultLogin', // ASK FOR PLAN NUMBER
//     'GuideStone Financial Resources': 'https://my.guidestone.org/MyGuideStone/RegistrationPersonalInfoStep/Index', // has recaptcha
//     'ICMA-RC': 'https://accountaccess.icmarc.org/participant/selfSelectedUserId.jsp', //recaptcha
//     'Milliman, Inc.': 'https://www.millimanbenefits.com/NewRegistration.aspx', //recapthA
//     'AIG Retirement Services': 'https://myaccount.valic.com/auth/public/registeronly#/', // ambiguous error message
//     'Lincoln Financial Group': 'https://lincolnfinancial.com/regn/static/regn-consumer/#/rps', // recaptcha
//     'Ascensus': 'https://myaccount.ascensus.com/rplink/account/Setup/Identity',  // ambiguous error message
//     'ADP Retirement Services': 'https://netsecure.adp.com/pages/sms/ess/v3/pub/ssr/theme.jsp',
//     'Alight Solutions': 'https://alight.com/find-your-hr-website',
//     'Securian Financial': 'https://www.securianretirementcenter.com/participant/main/#/registration/new-user ' // CAPTCHA
//
// }


// missing:
// 'Conduent HR Services, LLC'
// 'Newport Group'
// 'Northwest Plan Services, Inc.'
// The Standard registration doesn't ask for social and doesn't check database for existing user. Sends email
// 'BB&T Retirement and Institutional Services' // message ambigious "Web access for your plan is currently unavailable"
// 'EPIC Retirement Plan Services'
// 'BOK Financial' account ask for temp username and default password
// PCS Retirement can't find registration, forgot password could work?
// USI Consulting Group registration needs to enter ssn as login id and dob as password, https://www.usicg.com/route/DC_Navigating_through_web_access_SCWHAB_Final.pdf
// 'Pentegra Retirement Services'
// TCG Administrators https://retirement.tcgservices.com/default.aspx need plan password
// Insperity
//American Trust Retirement login first time need to contact them
// Unified Trust Company , N.A.
// Employee Fiduciary, LLC
// Correll Co.
// IPX/FPS https://ipxaccount.com/#/register-account plan id and code
// greenleaf trust  c

module.exports = {
    PROVIDERS
}
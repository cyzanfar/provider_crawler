const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URI)

const Provider = sequelize.define('Provider', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(length=100),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    tableName: 'providers'
});


const Instructor = sequelize.define('Instructor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    defaultCaptcha: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    multistep: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    failingCriteria: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    presenceSelector: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    submission: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    fields: {
        type: DataTypes.JSONB,
        allowNull: true,
        validate: {
            fieldValidator(value) {
                if (value === null && this.multistep === false) {
                    throw new Error("Field need to be defined if multistep is false");
                }
            }
        }
    },
    steps: {
        type: DataTypes.JSONB,
        allowNull: true,
        validate: {
            stepValidator(value) {
                if ((value === null && this.multistep === true)) {
                    throw new Error("Steps need to be defined if multistep is true");
                }
            }
        }
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    // Other model options go here
    tableName: 'instructors'
});


const CrawlerExecution = sequelize.define('CrawlerExecution', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userExternalId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hasProviderMatch: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    provider: {
        type: DataTypes.STRING,
        allowNull: true
    },
    failedProviderCrawl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    errorMessage: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'crawler_execution'
});



Instructor.associate = function(models) {
    Instructor.belongsTo(models.Provider, {foreignKey: 'providerId', as: 'provider'})
};

module.exports = {
    Provider,
    Instructor,
    CrawlerExecution,
    sequelize
}
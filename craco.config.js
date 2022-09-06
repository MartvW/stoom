const path = require(`path`);

const createAliases = (prefix) => ({
    '@assets': `${prefix}/assets`,
    '@sass': `${prefix}/sass`,
    '@api': `${prefix}/ts/api`,
    '@components': `${prefix}/ts/components`,
    '@hooks': `${prefix}/ts/hooks`,
    '@repository': `${prefix}/ts/repository`,
    '@routes': `${prefix}/ts/routes`,
    '@utils': `${prefix}/ts/utils`,
});

const aliases = createAliases('./src');

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
    webpack: {
        alias: resolvedAliases,
    },
};
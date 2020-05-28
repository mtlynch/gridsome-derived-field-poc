module.exports = function (api) {
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
        type Post implements Node @infer {
          title_starts_with_letter_a_inferred: Boolean
        }
    `);
  });

  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Post: {
        title_starts_with_letter_a_inferred(obj) {
          return obj.title[0].toLowerCase() === 'a';
        },
      },
    });
  });
};

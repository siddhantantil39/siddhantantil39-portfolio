const fs = require('fs');
const path = require('path');
const { buildSearchIndex } = require('../src/app/lib/Search');

const searchIndex = buildSearchIndex();

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'search-index.json'),
  JSON.stringify(searchIndex)
);

console.log('Search index generated successfully!');
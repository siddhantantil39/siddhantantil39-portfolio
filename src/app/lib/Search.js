// lib/search.js
const fs = require('fs');
const path = require('path');

function buildSearchIndex() {
  const searchIndex = {};
  const rootDir = process.cwd();
  const dataDir = path.join(rootDir, 'src', 'app', 'data');

  // Map data files to their corresponding routes
  const routeMap = {
    'HomeData.ts': '/home',
    'WorkData.ts': '/work',
    'EducationData.ts': '/education'
  };

  function extractContentFromDataFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const cleanContent = content
      .replace(/export\s+default\s+/g, '')
      .replace(/interface.*?{.*?}/gs, '')
      .replace(/:\s*string/g, '')
      .replace(/{\s*href:.*?}/g, '');

    try {
      const match = cleanContent.match(/=\s*({[\s\S]*})/);
      if (match) {
        const dataObject = eval('(' + match[1] + ')');
        return Object.values(dataObject)
          .map(value => {
            if (typeof value === 'string') return value;
            if (typeof value === 'object') return JSON.stringify(value);
            return '';
          })
          .join(' ');
      }
    } catch (error) {
      console.error(`Error parsing data file ${filePath}:`, error);
    }
    return '';
  }

  function indexContent(text, route) {
    const words = text.toLowerCase()
      .split(/\W+/)
      .filter(word => word.length > 2);

    words.forEach(word => {
      if (!searchIndex[word]) {
        searchIndex[word] = [];
      }
      if (!searchIndex[word].includes(route)) {
        searchIndex[word].push(route);
      }
    });
  }

  const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.ts')) {
        const content = extractContentFromDataFile(filePath);
        // Get the route from routeMap instead of using file path
        const route = routeMap[file] || file;
        if (content) {
          indexContent(content, route);
        }
      }
    });
  };

  processDirectory(dataDir);
  return searchIndex;
}

module.exports = { buildSearchIndex };
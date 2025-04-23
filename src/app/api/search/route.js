import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    );
  }

  try {
    const indexPath = path.join(process.cwd(), 'public', 'search-index.json');
    const searchIndex = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

    const searchTerms = query.toLowerCase().split(' ');
    let results = [];

    searchTerms.forEach(term => {
      if (term.length > 0) {
        Object.keys(searchIndex).forEach(indexTerm => {
          if (indexTerm.toLowerCase().includes(term)) {
            results = [...results, ...searchIndex[indexTerm]];
          }
        });
      }
    });

    // Remove duplicates
    results = [...new Set(results)];

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search' },
      { status: 500 }
    );
  }
}
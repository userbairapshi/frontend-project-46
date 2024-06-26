import fs from 'fs';
import genDiff from '../src/index.js';

const getFixturePath = (fileName) => `__fixtured__/${fileName}`;

const filePath3 = getFixturePath('filePath3.json');
const filePath4 = getFixturePath('filePath4.json');

const fileYaml3 = getFixturePath('filePath3.yaml');
const fileYaml4 = getFixturePath('filePath4.yaml');

const expectedDiffContent1 = fs.readFileSync('__fixtured__/file2.txt', 'utf-8');
const expectedDiffContent2 = fs.readFileSync('__fixtured__/file2.txt', 'utf-8');
const expectedFlatContent = fs.readFileSync('__fixtured__/file3.txt', 'utf-8');
const jsonResult = fs.readFileSync('__fixtured__/file4.json', 'utf-8');

describe('gendiff', () => {
  test('should return a comparison of nested files JSON', () => {
    const resultDiffJson2 = genDiff(filePath3, filePath4);
    expect(resultDiffJson2).toEqual(expectedDiffContent1);
  });

  test('should return a comparison of nested files yaml', () => {
    const resultDiffYaml2 = genDiff(fileYaml3, fileYaml4);
    expect(resultDiffYaml2).toEqual(expectedDiffContent2);
  });
});

describe('formatters', () => {
  test('should return flat format plain', () => {
    expect(genDiff(filePath3, filePath4, 'plain')).toEqual(expectedFlatContent);
  });

  test('should return flat format json', () => {
    expect(genDiff(filePath3, filePath4, 'json')).toEqual(jsonResult);
  });
});

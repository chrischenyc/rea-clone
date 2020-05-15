const { propertiesBySuburb } = require('./mock.provider');
const mockProperties = require('./mock.json');

describe('mockProvider.propertiesBySuburb', () => {
  it('should return all mock properties if the keyword is empty', async () => {
    const result = await propertiesBySuburb('');
    expect(result).toEqual(mockProperties);
  });

  it('should return nothing for an absurd keyword', async () => {
    const result = await propertiesBySuburb('not_a_real_suburb');
    expect(result).toEqual([]);
  });

  it('should return some properties for keyword Carlton', async () => {
    const result = await propertiesBySuburb('Carlton');
    expect(result).toMatchSnapshot();
  });

  it('should return some properties for keyword South Yarra', async () => {
    const result = await propertiesBySuburb('South Yarra');
    expect(result).toMatchSnapshot();
  });

  it('should return same properties on a case-insensitive basis', async () => {
    const resultWihCapitalisedKeyword = await propertiesBySuburb('Docklands');
    const resultWihLowerCaseKeyword = await propertiesBySuburb('docklands');
    const resultWihUpperCaseKeyword = await propertiesBySuburb('DOCKLANDS');

    expect(resultWihCapitalisedKeyword).toEqual(resultWihLowerCaseKeyword);
    expect(resultWihCapitalisedKeyword).toEqual(resultWihUpperCaseKeyword);
  });

  it('should return same properties for partially matched keywords', async () => {
    const resultWihPartiallyMatchedKeyword1 = await propertiesBySuburb('south');
    const resultWihPartiallyMatchedKeyword2 = await propertiesBySuburb('yarra');
    const resultWihFullyMatchedKeyword = await propertiesBySuburb('south yarra');

    expect(resultWihFullyMatchedKeyword).toEqual(resultWihPartiallyMatchedKeyword1);
    expect(resultWihFullyMatchedKeyword).toEqual(resultWihPartiallyMatchedKeyword2);
  });
});

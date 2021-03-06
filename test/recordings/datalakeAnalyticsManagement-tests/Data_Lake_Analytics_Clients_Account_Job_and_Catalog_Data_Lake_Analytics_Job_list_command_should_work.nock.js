// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8758.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"endTime\":\"2016-12-20T02:42:59.3605148+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"34cad093-5bbd-49d5-bf0c-b5284a7e51bb\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:13.5038178+00:00\",\"startTime\":\"2016-12-20T02:42:39.0249554+00:00\",\"endTime\":\"2016-12-20T02:42:44.6556016+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8b1c3ef2-9799-4bc8-942f-de4e3d03cd68',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:43:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8758.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"892f253b-a5f6-4cad-957a-a0d13bbb744a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:57.7355214+00:00\",\"endTime\":\"2016-12-20T02:42:59.3605148+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"},{\"jobId\":\"34cad093-5bbd-49d5-bf0c-b5284a7e51bb\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"jasonsrpexample@SPI\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-12-20T02:42:13.5038178+00:00\",\"startTime\":\"2016-12-20T02:42:39.0249554+00:00\",\"endTime\":\"2016-12-20T02:42:44.6556016+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8b1c3ef2-9799-4bc8-942f-de4e3d03cd68',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 20 Dec 2016 02:43:01 GMT',
  connection: 'close' });
 return result; }]];
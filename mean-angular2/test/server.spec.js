describe('server routing', () => {
    let chai = require('chai');
    let should = chai.should();
    let expect = chai.expect;
    let sinon = require('sinon');
    let sinonChai = require('sinon-chai');
    chai.use(sinonChai);

    let chaiHttp = require('chai-http');
    chai.use(chaiHttp);

    let server = require('../server/server');
    let mongoose = require('mongoose');
    let ToolModel = require('../server/models/tool.model');

    it('get /api returns "api works"', (done) => {
        chai.request(server)
            .get('/api/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.equal('api works');
                done();
                server.close();
            });
    });

    describe('/api/tools crud operations', () => {
        beforeEach((done) => {
            ToolModel.remove({}, (err) => {
                done();
            })
        });

        it('get /api/tools returns list of tools', (done) => {
            ['1', '2', '3'].forEach(function (i) {
                let example = new ToolModel({
                    uid: 'uid-' + i,
                    name: 'name-' + i,
                    description: 'desc-' + i,
                    link: 'link-' + i
                });
                example.save((err, value) => { });
            });
            chai.request(server)
                .get('/api/tools')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });


        it('post /api/tools creates a new tool', (done) => {
            let toolToCreate = {
                uid: 'uid-tocreate',
                name: 'name-tocreate',
                description: 'desc-tocreate',
                link: 'link-tocreate'
            };
            chai.request(server)
                .post('/api/tools')
                .send(toolToCreate)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    done();
                });

        });

        it('get /api/tools/:uid return tool by given uid', (done) => {
            ['1', '2', '3'].forEach(function (i) {
                let example = new ToolModel({
                    uid: 'uid-' + i,
                    name: 'name-' + i,
                    description: 'desc-' + i,
                    link: 'link-' + i
                });
                example.save((err, value) => { });
            });
            chai.request(server)
                .get('/api/tools/uid-2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.name.should.equal('name-2');
                    done();
                });

        });

        it('get /api/tools/:uid return 404 by given uid if not found', (done) => {
            ['1', '2', '3'].forEach(function (i) {
                let example = new ToolModel({
                    uid: 'uid-' + i,
                    name: 'name-' + i,
                    description: 'desc-' + i,
                    link: 'link-' + i
                });
                example.save((err, value) => { });
            });
            chai.request(server)
                .get('/api/tools/uid-21')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('put /api/tools/:uid updates tool by given uid', (done) => {
            let example = new ToolModel({
                uid: 'uid-put',
                name: 'name-put',
                description: 'desc-put',
                link: 'link-put'
            });
            example.save((err, value) => {
                chai.request(server)
                    .put('/api/tools/' + example.uid)
                    .send({
                        uid: example.uid,
                        name: 'name-put-again',
                        description: 'desc-put-again',
                        link: 'link-put-again'
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('uid').eql(example.uid);
                        res.body.should.have.property('name').eql('name-put-again');
                        res.body.should.have.property('description').eql('desc-put-again');
                        res.body.should.have.property('link').eql('link-put-again');
                        done();
                    });
            });
        });

        it('put /api/tools/:uid returns 404 if given uid not exists', (done) => {

            chai.request(server)
                .put('/api/tools/not-exist')
                .send({
                    uid: 'not-exist',
                    name: 'not-exist',
                    description: 'new desc',
                    link: 'new url'
                })
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('delete /api/tools/:uid deletes a tool by given uid', (done) => {
            ['1', '2', '3'].forEach(function (i) {
                let example = new ToolModel({
                    uid: 'uid-' + i,
                    name: 'name-' + i,
                    description: 'desc-' + i,
                    link: 'link-' + i
                });
                example.save((err, value) => { });
            });
            chai.request(server)
                .delete('/api/tools/uid-1')
                .end((err, res) => {
                    res.should.have.status(200);
                    ToolModel.find((err, res) => {
                        res.length.should.equal(2);
                        done();
                    })
                });
        });
    });
});
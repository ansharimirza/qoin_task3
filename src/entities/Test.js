module.exports.Test = class Test {
    constructor({
        id, 
        nama = null,
        status = null,
    }) {
            this.id = id;
            this.nama = nama;
            this.status = status;
        }
}
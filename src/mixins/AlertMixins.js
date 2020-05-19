export default {
    methods: {
        hello: function (value) {
            alert(value);
        },
        addToCounter: function () {
            return (this.counter += 1);
        },
        SubFromCounter: function () {
            return (this.counter -= 1);
        },
        // setFullName: function (value1, value2) {
        //     let firstname = value1;
        //     let lastname = value2
        //     return this.fullname = `${firstname} ${lastname}`
        // }
    },
    computed: {
    },
    watch: {
        kilometer: function (val) {
            this.kilometer = val;
            this.meter = val * 1000;
            console.log("watcher km : ");
        },
        meter: function (val) {
            this.kilometer = val / 1000;
            this.meter = val;
            console.log("watcher m : ");
        }
    }
}
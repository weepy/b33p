class Piano {
    constructor() {
        this.output = new Tone.Sampler({
            "A0" : "A0.ogg",
            // "C1" : "C1.ogg",
            // "D#1" : "Ds1.ogg",
            // "F#1" : "Fs1.ogg",
            // "A1" : "A1.ogg",
            // "C2" : "C2.ogg",
            // "D#2" : "Ds2.ogg",
            // "F#2" : "Fs2.ogg",
            "A2" : "A2.ogg",
            // "C3" : "C3.ogg",
            // "D#3" : "Ds3.ogg",
            // // "F#3" : "Fs3.ogg",
            "A3" : "A3.ogg",
            // // "C4" : "C4.ogg",
            // "D#4" : "Ds4.ogg",
            // // "F#4" : "Fs4.ogg",
            "A4" : "A4.ogg",
            // // "C5" : "C5.ogg",
            // "D#5" : "Ds5.ogg",
            // // "F#5" : "Fs5.ogg",
            "A5" : "A5.ogg",
            // // "C6" : "C6.ogg",
            // "D#6" : "Ds6.ogg",
            // // "F#6" : "Fs6.ogg",
            "A6" : "A6.ogg",
            // // "C7" : "C7.ogg",
            // "D#7" : "Ds7.ogg",
            // // "F#7" : "Fs7.ogg",
            // "A7" : "A7.ogg",
            // "C8" : "C8.ogg"
        }, {
            "release" : 1,
            "baseUrl" : "./audio/salamander/"
        })


    }

    noteon(key, v) {
        this.output.triggerAttack(key, "+0", v)
    }

    noteoff(key) {
        this.output.triggerRelease(key)
    }

}

export default Piano
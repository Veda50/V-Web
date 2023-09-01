import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.render('template.mustache', {
      technologies: [
            {
                name: "ExpressJS",
                image: "assets/img/tech/express.svg",
                description: "Kerangka kerja backend yang berjalan diatas lingkungan nodeJS dengan bahasa pemrograman javascript.",
            },
            {
                name: "Bootstrap",
                image: "assets/img/tech/bootsrap.svg",
                description: "Template sekaligus kerangka kerja frontend untuk membangun tampilan dan antarmuka pada halaman utama.",  
            },
            {
                name: "Mustache",
                image: "assets/img/tech/mustache.svg",
                description: "Template engine logic-less yang diterapkan untuk merender halaman utama website di sisi server."
            },
            // {
            //     name: "MongoDB",
            //     image: "assets/img/tech/mongodb.svg",
            //     description: "Salah satu NoSQL database, berbasis dokumen yang memiliki skalabilitas dan performa tinggi.",
            // },
            // {
            //     name: "React",
            //     image: "assets/img/tech/react.svg",
            //     description: "Library javascript untuk membangun antarmuka berbasis komponen dan Virtual DOM memungkinkan performa lebih tinggi dan reusabilitas yang baik.",
            // },
        ],
    });
});

export default mainRouter;
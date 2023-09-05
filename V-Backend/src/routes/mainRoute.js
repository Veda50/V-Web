import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    let data = {
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
            {
                name: "MongoDB",
                image: "assets/img/tech/mongodb.svg",
                description: "Salah satu NoSQL database, berbasis dokumen yang memiliki skalabilitas dan performa tinggi.",
            },
            {
                name: "React",
                image: "assets/img/tech/react.svg",
                description: "Library javascript untuk membangun antarmuka berbasis komponen dan Virtual DOM memungkinkan performa lebih tinggi dan reusabilitas yang baik.",
            },
        ],
        gallery: [
            {
                title: "Account",
                image: "assets/img/gallery/1.jpg",
                link: "",
                subTitle: "Authentication",
            },
            {
                title: "Projects",
                image: "assets/img/gallery/projects.png",
                link: "",
                subTitle: "Daftar Proyek",
            },
            {
                title: "Blogs",
                image: "assets/img/gallery/blogs.png",
                link: "",
                subTitle: "Tulisan Saya",
            },
            {
                title: "Repositories",
                image: "assets/img/gallery/repositories.png",
                link: "",
                subTitle: "Git Repository",
            },
            {
                title: "Documentations",
                image: "assets/img/gallery/documentations.png",
                link: "",
                subTitle: "Dokumentasi Proyek",
            },
            {
                title: "Certifications",
                image: "assets/img/gallery/certifications.png",
                link: "",
                subTitle: "Sertifikat Profesional",
            },
        ],
        timeline: [
            {
                title: "SMA 1 BAE",
                image: "assets/img/about/1.jpg",
                date: "2018 - 2021",
                description: "Bersekolah di Sekolah Menengah Negeri di SMAN 1 BAE.",
            },
            {
                title: "Teknik Informatika UNNES",
                image: "assets/img/about/2.jpg",
                date: "2021 - Present",
                description: "Berkuliah di program didik Teknik Informatika di Universitas Negeri Semarang.",
            }
        ]
    };

    data.timeline.map( (d) => {
        if( ( data.timeline.indexOf(d) % 2) == 1){
            d.class = "timeline-inverted";
        };
        return d;
    })
    res.render('template.mustache', data);
});

export default mainRouter;
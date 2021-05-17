/* Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data. */

var app = new Vue(
    {
        el: "#root",
        data: {
           messaggio: "Ciao VUE!",
           colorClass: "lightblue",
           img: "https://4.bp.blogspot.com/-4_QWmjgRnGc/WwBkneg1DDI/AAAAAAAAg68/3AxluQtDz4koIdxAJtC0HIWOy6DHWxn1wCLcBGAs/s1600/provenza.jpg",
        },
        methods: {
            cambiaColore: function () {

                if (this.colorClass == "lightblue") {
                    this.colorClass = "red";
                }else {
                    this.colorClass = "lightblue";
                }
            },

            cambiaImmagine: function () {

                if (this.img == "https://4.bp.blogspot.com/-4_QWmjgRnGc/WwBkneg1DDI/AAAAAAAAg68/3AxluQtDz4koIdxAJtC0HIWOy6DHWxn1wCLcBGAs/s1600/provenza.jpg") {
                    this.img = "https://www.architetturaecosostenibile.it/images/stories/2016/promuoviamo-paesaggio-italiano.jpg";
                }else {
                    this.img = "https://4.bp.blogspot.com/-4_QWmjgRnGc/WwBkneg1DDI/AAAAAAAAg68/3AxluQtDz4koIdxAJtC0HIWOy6DHWxn1wCLcBGAs/s1600/provenza.jpg";
                }
            }
        }
    }
);
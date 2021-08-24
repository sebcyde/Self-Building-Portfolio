
const MikaEnabler = document.getElementById('MikaEnabler')

const PointerContainer = document.getElementById('pointercontainer')

const Pointer = document.getElementById('pointer')


MikaEnabler.onclick = () => {
    Pointer.classList.add('hidden'); console.log('Pointer Hidden')

    console.log('Mika Enabled');

}


const Offcanvas = document.getElementById('offcanvasWithBackdrop')

Offcanvas.addEventListener('hidden.bs.offcanvas', function () {

    console.log('Pointer Active')

    Pointer.classList.remove('hidden');

})


/*
const user = document.querySelector("#username").value;
*/
const namesubmission = document.querySelector('#nameform')


namesubmission.addEventListener('submit', (e) => {

    const x = document.getElementById("username").value;

    e.preventDefault();

    document.querySelector('#oc1').classList.toggle('hidden');

    document.querySelector('.mika1').classList.toggle('hidden');

    document.querySelector('#oc2').classList.toggle('hidden');

    document.querySelector('.mika2').classList.toggle('hidden');

    console.log("User's name is", x);


    console.log('OC1 Hidden');

    console.log('OC2 Opened');

    document.querySelector('.oc2row').firstElementChild.prepend('', x)

    setTimeout(() => {
        document.querySelector('#oc2').classList.toggle('hidden');

        document.querySelector('.mika2').classList.toggle('hidden');

        document.querySelector('#oc3').classList.toggle('hidden');

        document.querySelector('.mika3').classList.toggle('hidden');

        document.querySelector('#oc3').firstElementChild.prepend('Alright ', x)

    }, 2000);


})


const off = document.querySelector('.off')
let canvas = document.querySelector('#offcanvasWithBackdrop')

document.querySelector('#endoc3').onclick = () => {

    Offcanvas.classList.toggle('show');

    console.log('OC hidden');

    document.querySelector('body').style.removeProperty('overflow');

    document.querySelector('body').style.removeProperty('padding-right');

    document.querySelector('#oc3').classList.toggle('hidden');

    document.querySelector('#mm1').classList.toggle('hidden');

    PointerContainer.removeChild(Pointer);

    setTimeout(() => {

        off.removeChild(canvas);

        return console.log('Canvas Removed');


    }, 1000);

    console.log('Pointer removed for Mika');

    document.querySelector('div.modal-backdrop').classList.remove('show');

    document.querySelector('#dim').classList.toggle('hidden');

    console.log('Mika has entered Homescreen');

    document.querySelector('#MikaEnabler').classList.toggle('below');

    document.querySelector('.helpercontainer').classList.toggle('below');



    setTimeout(() => {

        document.querySelector('#mm1').classList.toggle('hidden');

        document.querySelector('#mm2').classList.toggle('hidden');

        setTimeout(() => {

            document.querySelector('#mm2').classList.toggle('hidden');

            document.querySelector('#mm3').classList.toggle('hidden');


            setTimeout(() => {

                document.querySelector('.misstheshow').classList.toggle('hidden');

                console.log('User given exit button');

                setTimeout(() => {

                    document.querySelector('.mts').classList.toggle('hidden');


                    setTimeout(() => {

                        document.querySelector('#mm3').classList.toggle('hidden');


                        document.querySelector('#mm4').classList.toggle('hidden');

                        setTimeout(() => {


                            document.querySelector('#mm4').classList.toggle('hidden');


                            document.querySelector('#mm5').classList.toggle('hidden');





                        }, 3000);


                    }, 2000);


                }, 2000);

            }, 3000);

        }, 4000);



    }, 4000);


    setTimeout(() => {

        setTimeout(() => {

            document.querySelector('html').classList.replace('beforemika1', 'mikaedit1')

            document.querySelector('.mikaedit1').classList.replace('beforemika1', 'mikaedit1')

            console.log('Background Colour Changed');

            setTimeout(() => {

                setTimeout(() => {





                    setTimeout(() => {


                        let mremove1 = document.querySelector(".mikaremove1");

                        document.querySelector('.intro.col-6').removeChild(mremove1);

                        console.log('Lorem Removed');

                        let mpara2 = document.createElement("P");

                        mpara2.innerHTML = "I have proven experience in a number of front end skills, such as <b>JavaScript</b>,<b>CSS</b>,<b>HTML</b>,<b>Bootstrap</b>,<b>Responsive Design</b>, and some experience with backend techniques such as <b>Node JS</b> and <b>AJAX/AJAJ</b>.";

                        document.getElementById("mikaedit3").appendChild(mpara2);

                        console.log('2nd paragraph added')


                        document.querySelector('#mm7').classList.toggle('hidden');

                        document.querySelector('#mm8').classList.toggle('hidden');




                    }, 2000);

                    document.querySelector('#mm6').classList.toggle('hidden');

                    document.querySelector('#mm7').classList.toggle('hidden');


                    let mpara1 = document.createElement("P");

                    mpara1.innerHTML = "A creative and hardworking individual. A quick learning, highly resilient proffesional. I enjoy being innovative and thinking outside of the box. A passionate, problem solver with proven experience in both customer facing roles, as well as software roles. An eternal student always curious and hungry to learn, I also enjoy having fun along the way. :)";

                    document.getElementById("mikaedit2").appendChild(mpara1);

                    console.log('1st paragraph added')

                }, 2000);



                document.querySelector('#mm5').classList.toggle('hidden');

                document.querySelector('#mm6').classList.toggle('hidden');

                document.querySelector('.helpercontainer').removeChild(MikaEnabler);

                console.log('Mika Enabler Removed')

            }, 3000);


        }, 3000);

        return console.log('Mika about to edit')

    }, 17000);

    setTimeout(() => {

        document.querySelector('#mm8').classList.toggle('hidden');

        document.querySelector('#mm9').classList.toggle('hidden');

        document.querySelector('#mm9img').classList.toggle('flipmika');

        console.log('Mika Flipped')


        document.querySelector('#car1').classList.toggle('bradius')

        document.querySelector('#car2').classList.toggle('bradius')

        document.querySelector('#car3').classList.toggle('bradius')

        console.log('Carousel shadow added')

        document.querySelector('#carouselExampleControls').classList.toggle('bradius');

        document.querySelector('#carouselExampleControls').classList.toggle('caroshadow');

        const xbox = document.getElementById('xbox');

        xbox.remove();



        setTimeout(() => {

            document.querySelector('#codebutton').classList.toggle('hidden');

            document.querySelector('#codetext').classList.toggle('hidden');

            console.log('View Code button added')

            document.querySelector('#mm9').classList.toggle('hidden');

            document.querySelector('#mm10').classList.toggle('hidden');

            document.querySelector('#viewcode').classList.toggle('viewcodehidden');

            document.querySelector('#viewcode').classList.toggle('codeslide');

            setTimeout(() => {


                let myobj = document.getElementById("pointercontainer");

                let myobj2 = document.getElementById("helpercontainer");

                document.querySelector('.intro').removeChild(myobj);

                document.querySelector('.intro').removeChild(myobj2);

                console.log('Containers removed')

                document.querySelector('#mikacards').classList.replace('hidden', 'mikacards')

                console.log('Cards added')

                document.querySelector('#mm10').classList.toggle('hidden');

                document.querySelector('#mm11').classList.toggle('hidden');





                setTimeout(() => {

                    document.querySelector('#mikaedit4').classList.toggle('hidden');

                    console.log('Skills list added');

                    document.querySelector('#mm11').classList.toggle('hidden');

                    document.querySelector('#mm12').classList.toggle('hidden');




                }, 2500);


            }, 2500);


        }, 2500);


    }, 29000);


    setTimeout(() => {


        document.querySelector('#mm12').classList.toggle('hidden');

        document.querySelector('#mm13').classList.toggle('hidden');


        setTimeout(() => {

            document.querySelector('#mm13').classList.toggle('hidden');

            document.querySelector('#mm14').classList.toggle('hidden');




            setTimeout(() => {


                document.querySelector('#mm14').classList.toggle('hidden');

                document.querySelector('#mm15').classList.toggle('hidden');


                setTimeout(() => {

                    document.querySelector('#mm15').classList.toggle('hidden');



                    document.querySelector('#mm16').classList.toggle('hidden');


                    setTimeout(() => {

                        document.querySelector('#mm16').classList.toggle('hidden');

                        document.querySelector('#mm17').classList.toggle('hidden');

                        document.querySelector('#mikatab').classList.toggle('hidden');

                        console.log('Mika tab added')

                        setTimeout(() => {


                            document.querySelector('#mm17').classList.toggle('hidden');


                            const div = document.getElementById('bg');

                            div.remove();

                            const dim = document.getElementById('dim');

                            dim.remove();

                            console.log('Background dim removed')





                            const xbut = document.getElementById('xbuttons');

                            xbut.remove();


                        }, 2500);

                    }, 2500);


                }, 2500);


            }, 2500);






        }, 2500);


    }, 39000);








    /* add post button 3 time events here */
}












const userexit = document.getElementById('exitmika')

userexit.addEventListener("click", () => {

    console.log('User Exit');

    document.querySelector('.form1').classList.toggle('hidden');

    document.querySelector('.form2').classList.toggle('hidden');

    document.querySelector('.form1').classList.toggle('below');

    document.querySelector('.form2').classList.toggle('below');

    document.querySelector('#xbuttons').classList.replace('exitbuttons', 'exitbuttonsam');


});
















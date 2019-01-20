/**********************************************
*** GENERAL
**********************************************/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;

}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(78, 25, 25, 0.4), rgba(88, 29, 29, 0.4)), url('../pics/back1.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato, sans-serif;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 930px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.player-0-panel,
.player-1-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
}



/**********************************************
*** PLAYERS
**********************************************/

.player-name {
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}

.player-score {
    text-align: center;
    font-size: 75px;
    font-weight: 100;
    color: #EB4D4D;
    margin-bottom: 130px;
}

.active { background-color: #f7f7f7; }
.active .player-name { font-weight: 300; }

.active .player-name::after {
    content: "\2022";
    font-size: 42px;
    position: absolute;
    color: #EB4D4D;
    top: -7px;
    margin-left: 6px;

}

.player-current-box {
    background-color: #EB4D4D;
    color: #fff;
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 8px;
    color: #222;
}

.player-current-score {
    font-size: 25px;
}

button {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}

button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}

i {
    color: #EB4D4D;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.btn-new { top: 45px;}
.btn-roll { top: 403px;}
.btn-hold { top: 467px;}

/************** MODAL ************/
.btn-how { top: 105px;}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    color: #555;
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.3s;
    animation-name: animatetop;
    animation-duration: 0.3s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

/* The Close Button */
.close {
    color: white;
    float: right;
    font-size: 25px;
}

.close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
    padding: 25px 30px;
    background-color: #EB4D4D;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
}

.modal-body {
    padding: 40px 30px;
    line-height: 2.4rem;
    font-size: 18px;
    overflow: hidden;
}

.circus-pic {
    width: 25%;
    height: 15%;
    float: left;
}

.dice {
    position: absolute;
    left: 50%;
    top: 178px;
    transform: translateX(-50%);
    height: 90px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
}

.winner { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #EB4D4D; }

@media (min-width:1290px) {
    .modal-content {
        width:40%;
    }
}


#dialogoverlay{
    display: none;
    opacity: .8;
    width: 100%;
    z-index: 10;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}
#dialogbox{
    display: block;
    border-radius:7px;
    z-index: 10;
    margin: 0 auto;
    width: 50%;
    left: 50%;
    margin-left: -25%;
    position: fixed;
}
#dialogbox > div {
    background:#FFF;
    margin:8px;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}

#dialogbox > div > #dialogboxhead {
    background: #EB4D4D;
    font-size:1.5rem;
    padding: 25px 30px;
    color: white;
    text-transform: uppercase;
}

#dialogbox > div > #dialogboxbody {
    background: rgb(248, 249, 249);;
    padding:20px;
    color:#FFF;
}

#dialogboxbody input {
    font-size: 18px;
    line-height: 2rem;
    padding: 3px 5px;
    width: 100%;
    border: 1px solid #efecec;
}

#prompt_value1, #prompt_value2 {
    margin-bottom: 15px;
}

#dialogbox > div > #dialogboxfoot {
    background: rgb(248, 249, 249);;
    padding:10px;
    height: 80px;
    text-align:right;
    border-bottom: 1px solid #888;
}

#dialogboxfoot button {
    background: #d60d0dad;
    border-radius: 10px;
    padding: 10px 15px;
    color: white;
}

#dialogboxfoot button:hover {
    background: rgba(214, 13, 13, 0.85);
}

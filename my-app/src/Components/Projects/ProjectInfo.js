import React from 'react';
import Discord from './Discord.png'
import ChangeGear from './ChangeGear.png'
import Money from './moneymanager.jpg'

const seniorTechnologies = <ul style={{ listStyleType: "none" }}>
    <li>React <i className="fab fa-react"></i></li>
    <li>Redux</li>
    <li>MongoDB</li>
    <li>Node <i className="fab fa-node"></i></li>
</ul>

const moneyTechnologies = <ul style={{ listStyleType: "none" }}>
    <li>React <i className="fab fa-react"></i></li>
    <li>Redux</li>
    <li>Firebase <i className="fas fa-fire"></i></li>
</ul>

const discordTechnologies = <ul style={{ listStyleType: "none" }}>
    <li>Nodejs  <i className="fab fa-node"></i></li>
    <li>AWS  <i className="fab fa-aws"></i></li>
</ul>

const Projects = [
    {
        imag: ChangeGear,
        color: '#008073',
        fontColor: '#000f08',
        ident: 'Project-1',
        title: ['Senior Project', 'Proyecto de Grado'],
        description: ['A full stack web utility that helps a user compare various report tickets using a likert scale.', 
        'Una utilidad web full stack que ayuda a un usuario comparar tiquetes usando una escala Likert.'],
        repo: 'http://changegear-ticket-system.herokuapp.com',
        technologies: seniorTechnologies,
        invert: false,
    },
    {
        imag: Money,
        color: '#008073',
        fontColor: '#000f08',
        ident: 'Project-2',
        title: ['Money Manager', 'Money Manager'],
        description: ['A finance web application that tracks user expenses and calculates whether the user can afford a mortgage or not.',
         'Una aplicación web que almacena los gastos de un usuario y calcula si un usuario puede pagar una hipoteca.'],
        repo: 'https://managerfolio.herokuapp.com',
        technologies: moneyTechnologies,
        invert: true,
    },
    {
        imag: Discord,
        color: '#008073',
        fontColor: '#000f08',
        ident: 'Project-3',
        title: ['Aldebaran', 'Aldebaran'],
        description: ['A bot application that connects to a Discord server and plays music from YouTube, and defines words like a dictionary.',
         'Una aplicación que se conecta a un servidor Discord, reproduce música de YouTube y define palabras como un diccionario.'],
        repo: 'https://github.com/Tronax1/Aldebaran-',
        technologies: discordTechnologies,
        invert: false,
    }
]
export default Projects;
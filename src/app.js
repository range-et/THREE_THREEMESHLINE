// Standard injection for css to be associated with the HTML page
import style from "./main.css";
import * as THREE from 'three';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

const points = [];
for (let j = 0; j < Math.PI; j += 2 * Math.PI / 100) {
  points.push(new THREE.Vector3(Math.cos(j), Math.sin(j), 0));
}
const geo = new THREE.BufferGeometry().setFromPoints(points);
const line = new MeshLine();
line.setGeometry(geo);

const mat = new MeshLineMaterial();
const lineMesh = new THREE.Mesh(line, mat);
scene.add(lineMesh);

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
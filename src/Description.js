import lap from "./Pics/lap.jpeg";

function Description(){
	return(
		<section class="description">
			<img src={lap}/>
			<center><h1>Lorem Ipsium</h1></center>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </section>
	);
}
export default Description;
import a from "./Pics/a.jpg";
import b from "./Pics/b.jpg";
import c from "./Pics/c.jpg";
import d from "./Pics/d.jpg";
import e from "./Pics/e.jpg";

function Price(){
	return(
        <section class="price">
            <div class="pr">
                    <img src={a}/>
                    <div class="text">
                        <h3>Lorem Ipsium</h3>
                        <h1>$20000</h1>
                    </div>
            </div>

            <div class="pr">
                    <img src={c}/>
                    <div class="text">
                        <h3>Lorem Ipsium</h3>
                        <h1>$20000</h1>
                    </div>
            </div>
            
            <div class="pr">
                    <img src={b}/>
                    <div class="text">
                        <h3>Lorem Ipsium</h3>
                        <h1>$20000</h1>
                    </div>
            </div>

            <div class="pr">
                    <img src={d}/>
                    <div class="text">
                        <h3>Lorem Ipsium</h3>
                        <h1>$20000</h1>
                    </div>
            </div>
            <div class="pr">
                    <img src={e}/>
                    <div class="text">
                        <h3>Lorem Ipsium</h3>
                        <h1>$20000</h1>
                    </div>
            </div>
        </section>
	);
}
export default Price;
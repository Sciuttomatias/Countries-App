import { Link } from 'react-router-dom';
import '../../App.css';

function Landing() {
  return (
    <div className="Landing">
      <h1>Henry Countries</h1>
        <Link to="/countries">
            <button className="btn" type="button">Home</button>
        </Link>
      <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa, praesentium beatae nam amet officia. Pariatur quam dignissimos, repellat tempora dicta dolore, iusto voluptatibus, atque consequatur totam qui ipsa nobis.
          Nihil assumenda fuga earum voluptatem amet voluptates fugiat veniam, repellendus natus perspiciatis cupiditate inventore sequi cumque recusandae, saepe vitae esse reprehenderit aliquam quisquam perferendis nam quo excepturi explicabo. Enim, a!
          Eveniet qui nemo aspernatur nesciunt excepturi at voluptate blanditiis. Minima, qui! Ea culpa facilis architecto dolores natus, saepe voluptate. Voluptatum magnam nemo, blanditiis corrupti eaque error maxime repellendus delectus quibusdam?
          Nesciunt fuga quis obcaecati fugit totam nisi non nam illum dolor saepe distinctio provident explicabo sit, quidem exercitationem, soluta repudiandae, sequi illo! Quaerat accusantium fuga explicabo laborum doloribus qui eveniet.
          Autem sequi, odio sunt unde ducimus officia modi laborum maxime rerum molestias quo dicta est hic neque provident minima debitis voluptates cum nobis doloribus quaerat. Ut necessitatibus cumque quas odio!</p>
      </div>
    </div>
  );
}

export default Landing;
import { CardContainer, CardBody, CardFooter } from "./CardStyled";

export function Card({ news }) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>

        <img src={news.image} alt="imagem" />
      </CardBody>
      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.like}</span>
        </div>

        <div>
          <i className="bi bi-chat"></i>
        <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}

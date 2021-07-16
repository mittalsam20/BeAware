import Container from "@material-ui/core/Container";
import "./newscontent.css";
import NewsCard from "../newscard/newscard";
const NewsContent = ({ newsArr, newsResult }) => {
  return (
    <>
      <div>
        <Container maxWidth="md">
          <div className="content">
            <div className="headermessage">
              <span className="headertext">
                HEADER MESSAGEMESSAGEMESSAGEMESSAGEMESSAGEMESSAGE WILL COME HERE
              </span>
              <img
                src="https://pbs.twimg.com/profile_images/627085479268126720/k4Wwj-lS.png "
                alt=""
                width="10"
                srcset=""
              />
            </div>
            {newsArr.map((item) => {
              return <NewsCard Key={item.title} item={item} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsContent;

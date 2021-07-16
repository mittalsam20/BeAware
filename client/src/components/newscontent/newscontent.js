import Container from "@material-ui/core/Container";
import "./newscontent.css";
import NewsCard from "../newscard/newscard";
import Button from "@material-ui/core/Button";
const NewsContent = ({ newsArr, newsResult, loadMore, setLoadmore }) => {
  console.log(newsResult, loadMore);
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

            {loadMore <= newsResult && (
              <>
                <hr />
                <Button
                  className="loadmore"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoadmore(loadMore + 5);
                  }}
                >
                  Load More
                </Button>
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsContent;


import xMen from '../../resources/img/x-men.png';

const SingleComic = ({ setComicsClicked, comicsInfo }) => {
    const { title, description, pageCount, language, thumbnail, price } = comicsInfo;
    return (
        <div className="single-comic">
            <img src={thumbnail} alt="x-men" className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <a href="#" className="single-comic__back" onClick={() => setComicsClicked(false)}>Back to all</a>
        </div>
    )
}

export default SingleComic;
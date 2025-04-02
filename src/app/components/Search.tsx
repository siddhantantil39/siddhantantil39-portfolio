interface SearchProps {
    className?: string;
  }



const SearchComponent = ({className} :SearchProps) => {
    return(
        <div className={className}>
            <input type="text"></input>
        </div>
    )
}

export default SearchComponent;
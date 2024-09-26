function Item1(){
        let date = '5/12/2023';
        let product = 'MILK';
    return <div class="container text-center">
    <div class="row">
      <div class="col-4">
        <p class ="item">{product}</p>
      </div>
      <div class="col-4">
       <p class ="item">{date}</p>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">
        DELETE
        </button>
      </div>
    </div>
  </div>
}
export default Item1;
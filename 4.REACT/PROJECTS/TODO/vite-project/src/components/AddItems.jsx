function AddItems(){
    return <div class="container text-center">
    <div class="row">
      <div class="col-4">
        <input type="text" placeholder="Enter your TODO here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
         ADD
        </button>
      </div>
    </div>
  </div>
}
export default AddItems;
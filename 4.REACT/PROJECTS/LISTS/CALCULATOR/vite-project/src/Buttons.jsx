import styles from './App.module.css'; 
function Buttons(){
    const buttonsname = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return(
    <>
     <div className={styles.buttons}>
        {buttonsname.map(buttonsname=><button className={styles.button}>{buttonsname}</button>)}
      </div>
    </>
)
}
export default Buttons;
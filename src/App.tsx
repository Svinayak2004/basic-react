import "./App.css";
import Text from "./comp/text";
import TextCard from "./comp/textCard";

function App() {
  return (
    <>
      <Text />
      <div className="flex flex-wrap ">
        <TextCard
          image="https://plus.unsplash.com/premium_photo-1674635304853-a2f074f09138?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          message="Thank you, Classbot, for providing an affordable application with excellent student data management and fee management features."
          name="Mohit Gupta"
          role="Data Analyst"
        />
        <TextCard
          image="https://plus.unsplash.com/premium_photo-1674635304853-a2f074f09138?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          message="Thank you, Classbot, for providing an affordable application with excellent student data management and fee management features."
          name="Mohit Gupta"
          role="Data Analyst"
        />
      </div>
    </>
  );
}

export default App;

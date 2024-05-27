import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus';


class  ProfileStatus extends React.Component  {
  
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState(
      {
        editMode: true
      }
    )
  }

  deactivateEditMode = () => {
    this.setState(
      {
        editMode: false
      }
    );
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status){
   this.setState({
      status: this.props.status
    })
    }
 
    let a = this.state;
    let b = this.props;
// console.log("componentDidUpdate")
  }


  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
      <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
    </div>
        }
      {this.state.editMode &&
    <div>
      <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
    </div>
  }
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       {!this.state.editMode &&
  //         <div>
  //     <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
  //   </div>
  //       }
  //     {this.state.editMode &&
  //   <div>
  //     <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
  //   </div>
  // }
  //     </div>
  //   )
  // }
    
}

export default ProfileStatus;
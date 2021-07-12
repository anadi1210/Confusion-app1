import { comment, list } from 'postcss';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Detail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments){
        if(comments == null) {
            return(<div></div>);
        }

        const c = comments.map((comments) =>{
            return (
                <li key={comments.id}>
                    <p>{comments.comment}</p>
                    <p>{comments.author}</p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>comments</h4>
                <ul className="list-unstyled">
                    {c}
                </ul>
            </div>
        )
    }

    renderDish(dish) {
        if(dish != null){
            return (
                <div className = 'col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>       
                </div>
            )
        }else{
            return(<div></div>)
        }
    }

    render(){
        const dish = this.props.dish;

        if(dish == null){
            return(<div></div>)
        }

        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)

        return(
            <div className='row'>
                {dishItem}
                {commentItem}       
            </div>
        );
    }

}

export default Detail;



















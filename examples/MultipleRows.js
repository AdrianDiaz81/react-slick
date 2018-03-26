import React, { Component } from 'react'
import Slider from '../src/slider'

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
      rows: 3,
      slidesPerRow: 2,
    };
    return (
      <div>
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
          <div><h3>10</h3></div>
          <div><h3>11</h3></div>
          <div><h3>12</h3></div>
          <div><h3>13</h3></div>
          <div><h3>14</h3></div>
          <div><h3>15</h3></div>
          <div><h3>16</h3></div>
          <div><h3>17</h3></div>
          <div><h3>18</h3></div>
          <div><h3>19</h3></div>
          <div><h3>20</h3></div>
          <div><h3>21</h3></div>
          <div><h3>22</h3></div>
          <div><h3>23</h3></div>
          <div><h3>24</h3></div>
          <div><h3>25</h3></div>
          <div><h3>26</h3></div>
          <div><h3>27</h3></div>
          <div><h3>28</h3></div>
          <div><h3>29</h3></div>
          <div><h3>30</h3></div>
          <div><h3>31</h3></div>
          <div><h3>32</h3></div>
          <div><h3>33</h3></div>
          <div><h3>34</h3></div>
          <div><h3>35</h3></div>
          <div><h3>36</h3></div>
        </Slider>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?dpr=1&auto=compress,format&fit=crop&w=1489&h=&q=80&cs=tinysrgb&crop=',
    altText: 'Pretty Sky and Water',
    caption: 'We provide the latest weather updates!',
    captionHeader: 'Weather Updates'
  },
  {
    src: 'https://images.unsplash.com/photo-1498817569864-4ec3b035b802?dpr=1&auto=compress,format&fit=crop&w=1490&h=&q=80&cs=tinysrgb&crop=',
    altText: 'Sunrise Pic',
    caption: 'Always know when the sun rises with our Sunrise Report!',
    captionHeader: 'Sunrise Report App'
  },
  {
    src: 'https://images.unsplash.com/photo-1495726804630-0f35d203a6fc?dpr=1&auto=compress,format&fit=crop&w=1489&h=&q=80&cs=tinysrgb&crop=',
    altText: 'Snowy Image',
    caption: "Don't miss another photo opportunity!",
    captionHeader: 'Be Prepared'
  }
];

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
          <CarouselCaption captionText={item.caption} captionHeader={item.captionHeader} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
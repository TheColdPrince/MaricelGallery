const imgUrls = ['https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.6435-9/83515976_109231670622685_9172849477558468608_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG_Tc5OnPd7zDjXOHQpkqZZ0XGXM9OHq4LRcZcz04ergv__QMYw7WvC0z_a8JfosMXG3GTSfknJ0x4l04xWcCXX&_nc_ohc=u14_9RPFtdgAX_V6YaE&_nc_ht=scontent.fcrk2-2.fna&oh=00_AfDf3aSptYvGaFwpgFwSV9I7Bv0yPQy6TThBtTvCudmSKw&oe=647C40D5', 'https://source.unsplash.com/lVmR1YaBGG4/800x600', 'https://source.unsplash.com/5KvPQc1Uklk/800x600', 'https://source.unsplash.com/GtYFwFrFbMA/800x600', 'https://source.unsplash.com/Igct8iZucFI/800x600', 'https://source.unsplash.com/M01DfkOqz7I/800x600', 'https://source.unsplash.com/MoI_cHNcSK8/800x600', 'https://source.unsplash.com/M0WbGFRTXqU/800x600', 'https://source.unsplash.com/s48nn4NtlZ4/800x600', 'https://source.unsplash.com/E4944K_4SvI/800x600', 'https://source.unsplash.com/F5Dxy9i8bxc/800x600', 'https://source.unsplash.com/iPum7Ket2jo/800x600'];


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return /*#__PURE__*/(
      React.createElement("div", { onClick: e => this.openModal(e, index) }, /*#__PURE__*/
      React.createElement("img", { src: src, key: src })));


  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1 }));

  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1 }));

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "gallery-container" }, /*#__PURE__*/
      React.createElement("h1", null, "\uD83D\uDD25 Maricel Gallery \uD83D\uDD25"), /*#__PURE__*/
      React.createElement("div", { className: "gallery-grid" },
      imgUrls.map(this.renderImageContent)), /*#__PURE__*/

      React.createElement(GalleryModal, {
        closeModal: this.closeModal,
        findPrev: this.findPrev,
        findNext: this.findNext,
        hasPrev: this.state.currentIndex > 0,
        hasNext: this.state.currentIndex + 1 < imgUrls.length,
        src: imgUrls[this.state.currentIndex] })));



  }}


class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
    this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
    this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
    this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut');
      return null;
    }
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "modal-overlay", onClick: closeModal }), /*#__PURE__*/
      React.createElement("div", { isOpen: !!src, className: "modal" }, /*#__PURE__*/
      React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
      React.createElement("a", { href: "#", className: "modal-close", onClick: closeModal, onKeyDown: this.handleKeyDown }, "\xD7"),
      hasPrev && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-prev", onClick: findPrev, onKeyDown: this.handleKeyDown }, "\u2039"),
      hasNext && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-next", onClick: findNext, onKeyDown: this.handleKeyDown }, "\u203A"), /*#__PURE__*/
      React.createElement("img", { src: src })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Gallery, null), document.querySelector('.gallery-container'));

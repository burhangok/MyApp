
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, BreadcrumbItem, Table, Row, Col, Input ,Button } from 'reactstrap';



function App() {
  return (
    <div>
      <Row>
        <Col className="bg-light border">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#">
                Ana sayfa
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
             ilk değişim
            </BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col className="bg-light border">
         
          <Input
          />
        </Col>
        <Col className="bg-light border">
          
        </Col>
        <Col className="bg-light border">
          <Button
            style={{ backgroundColor: "#8484F8" }} gradient
          >
            Export
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            style={{ backgroundColor: "#8484F8" }} gradient
          >
            Filters
          </Button>
        </Col>
      </Row>
    

      <Table
        bordered
        borderless
        hover
        responsive
      >
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>
             Source of Booking
            </th>
            <th>
            Status
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
            <td>
              @mdo
            </td>
          </tr>
          <tr>
            <th scope="row">
              2
            </th>
            <td>
              Jacob
            </td>
            <td>
              Thornton
            </td>
            <td>
              @fat
            </td>
          </tr>
          <tr>
            <th scope="row">
              3
            </th>
            <td>
              Larry
            </td>
            <td>
              the Bird
            </td>
            <td>
              @twitter
            </td>
          </tr>
        </tbody>
      </Table>
</div>


  );
}

export default App;

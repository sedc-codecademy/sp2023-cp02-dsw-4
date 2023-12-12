using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderitemController : ControllerBase
    {
        private IOrderitemService _orderitemService;
        public OrderitemController(IOrderitemService orderitemService)
        {
            _orderitemService = orderitemService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var orderitem = _orderitemService.GetAll();
                return Ok(orderitem);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {

            try
            {
                var orderitem = _orderitemService.GetById(id);
                return Ok(orderitem);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        
        [HttpPost("AddOrderitem/{orderId}")]
        public IActionResult AddOrderitem(List<AddOrderItemDto> orderitemsAddDto, string orderId)
        {
            try
            {
                _orderitemService.Add(orderitemsAddDto, orderId);
                return StatusCode(StatusCodes.Status204NoContent, "Orderitem added");
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpPut("UpdateOrderItem")]
        public IActionResult UpdateOrderItem(OrderItemDto orderitemDto)
        {
            try
            {
                _orderitemService.Update(orderitemDto);
                return StatusCode(StatusCodes.Status204NoContent, "Orderitem updated");
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(string id)
        {
            try
            {
                _orderitemService.DeleteById(id);
                return StatusCode(StatusCodes.Status204NoContent, "Order Item  deleted");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }
    }
}

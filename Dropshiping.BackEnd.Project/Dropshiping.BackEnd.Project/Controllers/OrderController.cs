using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Enums;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Mvc;
using XAct.Security;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var orders = _orderService.GetAll();

                return Ok(orders);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpGet("PurchasedOrders")]
        public IActionResult GetPurchased()
        {
            try
            {
                var orders = _orderService.GetPurchased();

                return Ok(orders);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex.Message);
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
                var rating = _orderService.GetById(id);

                return Ok(rating);
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

        [HttpPost("NewOrder")]
        public IActionResult AddOrder(AddOrderDto order)
        {
            try
            {
                _orderService.Add(order);
                return Ok("Order is created successfully!");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (InvalidOperationException ex)
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

        [HttpPut("UpdateOrder/{id}")]
        public IActionResult UpdateOrder(string id)
        {
            try
            {
                _orderService.Update(id);
                var order = _orderService.GetById(id);
                var status = Enum.GetName(typeof(DeliveryStatusEnum), order.Status);

                //return StatusCode(StatusCodes.Status204NoContent, $"Order status updated to: {status}!");
                return Ok($"Order status updated to: {status}!");
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotAuthorizedException ex)
            {
                return Forbid(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(string id)
        {
            try
            {
                _orderService.DeleteById(id);

                return StatusCode(StatusCodes.Status204NoContent, "Order deleted");

            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (NotAuthorizedException ex)
            {
                return Forbid(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }


    }
}

using Dropshiping.BackEnd.Dtos.UserOrderDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOrderController : ControllerBase
    {
        private IUserOrderService _userOrderService;
        private IUserService _userService;
        private IOrderService _orderService;

        public UserOrderController(IUserOrderService userOrderService, IUserService userService, IOrderService orderService)
        {
            _userOrderService = userOrderService;
            _orderService = orderService;
            _userService = userService;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var userOrders = _userOrderService.GetAll();
                return Ok(userOrders);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            try
            {
                var userOrder = _userOrderService.GetById(id);
                return Ok(userOrder);
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

        [Authorize(Roles = "Courier")]
        [HttpPost("AssignCourier/{userId}/toOrder/{orderId}")]
        public IActionResult AddUserOrder(string userId, string orderId)
        {
            try
            {
                var user = _userService.GetById(userId);
                var order = _orderService.GetById(orderId);

                _userOrderService.Add(userId, orderId);
                _orderService.Update(orderId);

                return Ok($"Courier {user.FirstName} {user.LastName} is assigned to order number: {order.Id}");
            }
            catch (ArgumentNullException ex)
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

        [Authorize(Roles = "Admin")]
        [HttpPut("UpdateUserOrder")]
        public IActionResult UpdateUserOrder(UserOrderDto userOrderDto)
        {
            try
            {
                _userOrderService.Update(userOrderDto);
                return Ok("UserOrder updated");
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

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteById(string id)
        {
            try
            {
                _userOrderService.DeleteById(id);
                return StatusCode(StatusCodes.Status204NoContent, "UserOrder  deleted");
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

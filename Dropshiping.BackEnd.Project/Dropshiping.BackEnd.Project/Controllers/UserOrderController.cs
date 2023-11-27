using Dropshiping.BackEnd.Dtos.OrderitemDtos;
using Dropshiping.BackEnd.Dtos.UserOrderDtos;
using Dropshiping.BackEnd.Services.UserServices.Implementation;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOrderController : ControllerBase
    {
        private IUserOrderService _userOrderService;

        public UserOrderController(IUserOrderService userOrderService)
        {
            _userOrderService = userOrderService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var userOrder = _userOrderService.GetAll();
                return Ok(userOrder);
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

        [HttpPost("AddUserOrder")]
        public IActionResult AddUserOrder(UserOrderAddDto userOrderAddDto)
        {
            try
            {
                _userOrderService.Add(userOrderAddDto);
                return StatusCode(StatusCodes.Status204NoContent, "ProductSize added");
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

        [HttpPut("UpdateUserOrder")]
        public IActionResult UpdateUserOrder(UserOrderDto userOrderDto)
        {
            try
            {
                _userOrderService.Update(userOrderDto);
                return StatusCode(StatusCodes.Status204NoContent, "UserOrder updated");
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

using Dropshiping.BackEnd.Dtos.SubscriberDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriberController : ControllerBase
    {
        private ISubscriberService _subscriberService;
        public SubscriberController(ISubscriberService subscriberService)
        {
            _subscriberService = subscriberService;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var subscriber = _subscriberService.GetAll();

                return Ok(subscriber);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("{email}")]
        public IActionResult GetById(string email)
        {
            try
            {
                var subscriber = _subscriberService.GetById(email);

                return Ok(subscriber);
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

        [HttpPost("AddSubscriber")]
        public IActionResult AddSubscriber(SubscriberDto subscriberDto)
        {
            try
            {
                _subscriberService.Add(subscriberDto);
                return Ok();
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
        [HttpPut("UpdateSubscriber")]
        public IActionResult UpdateSubscriber([FromBody] SubscriberDto subscriberDto)
        {
            try
            {
                _subscriberService.Update(subscriberDto);
                return StatusCode(StatusCodes.Status204NoContent, "Subscriber updated");
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
        [HttpDelete("{email}")]
        public IActionResult DeleteCategory(string email)
        {
            try
            {
                _subscriberService.DeleteById(email);
                return StatusCode(StatusCodes.Status204NoContent, "Category deleted");

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

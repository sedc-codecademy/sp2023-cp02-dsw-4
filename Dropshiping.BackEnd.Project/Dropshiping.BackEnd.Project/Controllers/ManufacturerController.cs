using System;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufacturerController : ControllerBase
    {
        private IManufacturerService _manufacturerService;
        public ManufacturerController(IManufacturerService manufacturerService)
        {
            _manufacturerService = manufacturerService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var manufacturer = _manufacturerService.GetAll();
                return Ok(manufacturer);
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
                var manufacturer = _manufacturerService.GetById(id);
                return Ok(manufacturer);
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

        [HttpPost("AddManufacturer")]
        public IActionResult AddRegion(ManufacturerDto manufacturerDto)
        {
            try
            {
                _manufacturerService.Add(manufacturerDto);
                return StatusCode(StatusCodes.Status204NoContent, "Region added");
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

        [HttpPut("UpdateManufacturer")]
        public IActionResult UpdateRegion(ManufacturerDto manufacturerDto)
        {
            try
            {
                _manufacturerService.Update(manufacturerDto);
                return StatusCode(StatusCodes.Status204NoContent, "Manufacturer updated");
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
                _manufacturerService.DeleteById(id);
                return StatusCode(StatusCodes.Status204NoContent, "Manufacturer deleted");
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

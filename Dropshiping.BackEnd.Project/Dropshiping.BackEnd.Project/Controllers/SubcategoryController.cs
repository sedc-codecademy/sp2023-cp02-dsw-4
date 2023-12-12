using Dropshiping.BackEnd.Dtos.SubcategoryDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubcategoryController : ControllerBase
    {
        private ISubcategoryService _subcategoryService;
        public SubcategoryController(ISubcategoryService subcategoryService)
        {
            _subcategoryService = subcategoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var subcategories = _subcategoryService.GetAll();
                return Ok(subcategories);
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
                var subcategory = _subcategoryService.GetById(id);
                return Ok(subcategory); 
            }
            catch(KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("AddSubcategory")]
        public IActionResult AddSubcategory(NewSubcategoryDto subcategoryDto)
        {
            try
            {
                _subcategoryService.Add(subcategoryDto);
                return Ok("Subcategory was created successfully");
            }
            catch (InvalidDataException ex)
            {
                return BadRequest(ex.Message);
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
        [HttpPut("UpdateSubcategory")]
        public IActionResult UpdateSubcategory([FromBody]SubcategoryDto subcategoryDto)
        {
            try
            {
                _subcategoryService.Update(subcategoryDto);
                return Ok("Subcategory is updated successfully!");
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (ArgumentException ex)
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
        public IActionResult DeleteSubcategory(string id)
        {
            try
            {
                _subcategoryService.DeleteById(id);
                return Ok("Subcategory is deleted successfully!");
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

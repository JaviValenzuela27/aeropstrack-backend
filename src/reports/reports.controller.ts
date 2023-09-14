import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SMSReports')
@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Get()
  async getReports() {
    return await this.reportService.getReports();
  }

  @Post()
  async createReport(@Body() newReport: CreateReportDto) {
    return await this.reportService.createReport(newReport);
  }
}
